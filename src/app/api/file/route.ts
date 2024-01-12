export async function POST(req: Request, res: Response) {
  const formData = await req.formData()
  const origin = req.url
  const file = formData.get('file')
  console.log(file)
  return new Response(`Hello, ${origin}`, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': `h`,
      'Access-Control-Allow-Methods': `GET, POST, PUT, DELETE, OPTIONS`,
      'Access-Control-Allow-Headers': `Content-Type`,
    },
  })
}
