import Card from "../components/Card";

const about = () => {

  return (
    <div>
      <div>about me</div>
      <Card title={"ejemplo"} description={"lorem ipzo sagasfgafdg "} />

      <Card title={"ejemplo"} description={"lorem ipzo sagasfgafdg "} />
      <Card title={"ejemplo"} description={"lorem ipzo sagasfgafdg "} />
      
      <button type="button">
        <i class="fa-solid fa-circle-check text-black"></i>hi!
      </button>
      <div class="flex justify-center items-center">
            <div
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span class="visually-hidden">
                <i class="fa-solid fa-spinner"></i>
              </span>
            </div>
          </div>
    </div>
  );
};

export default about;
