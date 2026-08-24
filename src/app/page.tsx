export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

        backgroundImage: "url('bg-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-2xl">Hi</p>
    </div>
  );
}