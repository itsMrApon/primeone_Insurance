import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Contact form submission:', body);
    
    // Map frontend categories to the exact values Laravel expects (from Postman guide)
    const categoryMapping: { [key: string]: string } = {
      'Personal Insurance': 'personal_insurance',
      'Commercial Vehicle Insurance': 'commercial_vehicle',
      'Tax Services': 'tax_services',
      'TLC & Transportation Services': 'tlc_services',
      'DMV Services': 'dmv_services',
      'Professional Services': 'professional_services'
    };
    
    // Include selected services in message for clarity
    const selectedServices = body.categories && body.categories.length > 0 
      ? `\n\nSelected Services:\n${body.categories.map((cat: string) => `• ${cat}`).join('\n')}` 
      : '';
    
    // Map categories to Laravel-expected format from Postman guide
    const mappedCategories = body.categories && body.categories.length > 0
      ? body.categories.map((cat: string) => categoryMapping[cat] || 'personal_insurance')
      : ['personal_insurance'];
    
    const transformedBody = {
      name: body.name,
      email: body.email,
      message: body.message + selectedServices,
      categories: mappedCategories,
      terms: body.terms
    };
    
    console.log('Original form data:', body);
    console.log('Mapped categories:', mappedCategories);
    console.log('Transformed body for Laravel:', transformedBody);
    
    // Try HTTPS first, fallback to HTTP if needed
    const apiUrl = 'https://api.keyatra.com/api/contact-form';
    
    console.log('Calling API:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'PrimeOne-NextJS/1.0',
      },
      body: JSON.stringify(transformedBody),
    });

    console.log('API Response status:', response.status);
    console.log('API Response headers:', Object.fromEntries(response.headers.entries()));

    const data = await response.json();
    console.log('API Response data:', data);
    
    if (!response.ok) {
      console.error('Contact API error:', response.status, data);
      console.error('Full validation errors:', JSON.stringify(data, null, 2));
      return NextResponse.json(
        { success: false, error: data.message || 'Failed to submit contact form', details: data },
        { status: response.status }
      );
    }

    console.log('Contact form submitted successfully:', data);
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Contact form proxy error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
