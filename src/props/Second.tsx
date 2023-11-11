import First from "./first";
const Second: React.FC = () => {
  return (
    <div>
      <First
        name="Ashish"
        lastname="Yadav"
        onClick={() => {
          alert("Hii Ashish");
        }}
        chilren={<> I am a react Component</>}
      />
    </div>
  );
};

export default Second;
