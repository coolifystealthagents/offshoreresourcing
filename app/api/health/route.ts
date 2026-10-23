export const dynamic = 'force-static';

export function GET() {
  return new Response(JSON.stringify({ status: 'ok', service: 'offshoreresourcing.com' }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}
