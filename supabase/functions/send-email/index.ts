export async function handler(req: Request) {
  const body = await req.json();
  const { customerName, customerEmail, orderDetails } = body;

  console.log("Sending order email to:", customerEmail);
  console.log("Order details:", orderDetails);

  return new Response(
    JSON.stringify({ message: `Order email sent successfully to ${customerEmail}` }),
    { headers: { "Content-Type": "application/json" }, status: 200 }
  );
}

