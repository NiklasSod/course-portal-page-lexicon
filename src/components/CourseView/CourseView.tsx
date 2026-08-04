import PrimaryButton from "../Buttons/PrimaryButton";

function CourseView() {
  return (
    <div>
      <h1>Kursvy</h1>
      
      <div>
        <h2>Webbutveckling från grunden</h2>
        <p>En praktisk kurs för nybörjare.</p>
        
        <div>
          <p><strong>Start:</strong> 12 aug 2026</p>
          <p><strong>Längd:</strong> 8 veckor</p>
          <p><strong>Nivå:</strong> Nybörjare</p>
          <p><strong>Pris:</strong> 9 900 kr</p>
        </div>

        <div>
          <PrimaryButton text="Anmäl dig nu" dark={true} />
        </div>
      </div>
    </div>
  );
}

export default CourseView;