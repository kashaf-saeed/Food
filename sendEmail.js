const PROJECT_REF = "xzvjuwimgoabnkjsbwqa"; // Tumhara Supabase project ref
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dmp1d2ltZ29hYm5ranNid3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NTExNDgsImV4cCI6MjA3OTUyNzE0OH0.ZLyyid_Pn_PtX4c6s15SoaY4mY48xW2cmzl2bnfpC0s"; // Tumhara anon key

const body = {
  customerName: "Kashaf",
  customerEmail: "kashaf@example.com",
  orderDetails: "Pizza x1"
};

fetch(`https://${PROJECT_REF}.functions.supabase.co/send-email`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apikey": ANON_KEY,
    "Authorization": `Bearer ${ANON_KEY}`
  },
  body: JSON.stringify(body)
})
  .then(async res => {
    // ✅ ensure we log full response text
    const text = await res.text();
    console.log("✅ Response:", text);
  })
  .catch(err => console.error("❌ Error:", err));
