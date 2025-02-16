export default function Algorithms() {
  return (
    <div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await fetch("http://127.0.0.1:8000/", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ name: "yash" }),
          }).then((res) => console.log(JSON.stringify(res)));
        }}
      >
        here
      </button>
    </div>
  );
}
