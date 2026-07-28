export const dynamic = 'force-dynamic';
export function GET() { return Response.json({ status: 'ok', service: 'offshoreresourcing' }, { headers: { 'cache-control': 'no-store' } }); }
