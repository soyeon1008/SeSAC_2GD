function FirstPractice() {
  const helloStr = "hello, first exercise";
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={() => alert("클릭됨")}
    >
      {helloStr}
    </div>
  );
}

export default FirstPractice;
