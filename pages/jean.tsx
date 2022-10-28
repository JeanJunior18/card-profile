import Image from "next/image";

export default function JeanCard() {
  return (
    <div className="card" onclick="changeCard(event)">

      <Image src="https://github.com/JeanJunior18.png" alt="Foto de Jean Junior" width="100" height='100' />
      <div className="info">
        <h1>Jean Junior</h1>
        <p>Student at NextJS</p>
      </div>
    </div>
  )
} 