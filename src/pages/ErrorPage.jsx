import Button from "@/components/Button";
import Seo from "@/components/common/Seo";

export default function ErrorPage() {
  return (
    <section className="noice-overlay">
      <Seo title="Error" />
      {/* Tailwind's bg-[url(...)] arbitrary value has to be a static string it
      can see at build time, so it can't take a dynamic BASE_URL prefix —
      this needs to be a real inline style instead. */}
      <div
        className="h-screen bg-no-repeat bg-center sm:bg-size-[120%] bg-cover"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/404.png')` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-1/2 max-sm:w-full">
          <div className="container-sm">
            <div className="dark:bg-secondary bg-white text-center xl:p-85 p-40 noice-overlay">
              <span className="dark:text-white text-secondary md:text-xl text-base mb-30">Oops! 404 Error</span>
              <h1 className="dark:text-white text-secondary xl:text-8xl/100 lg:text-5xl text-4xl lg:mb-40 mb-20">Page Not Found</h1>
              <Button label="Back To Home" href="/home" type="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
