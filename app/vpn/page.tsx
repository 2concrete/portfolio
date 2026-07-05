import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const page = () => {
  return (
    <>
      <main className="flex h-screen justify-center items-center font-[Inter]">
        <section className="flex justify-between items-center">
          <>
            <Script src="https://js.stripe.com/v3/buy-button.js" async />
            <div className="flex-col flex items-center mx-4">
              <span className="text-3xl">no lag vpn</span>
              <span className="text-sm mb-6">two devices per subscription</span>
              <div>
                <ol className="mb-10 text-center">
                  <li>vpn server is located in western australia</li>
                  <li>completely bypasses all school wifi blockers</li>
                  <li>gives access to all social media and all games</li>
                  <li>no disconnects, instant connection</li>
                </ol>
                <ol className="mb-10">
                  <li>
                    works on all <strong>personal</strong> devices (phone,
                    laptop, ipad)
                  </li>
                  <li className="text-xs">*not school desktops</li>
                  <li className="text-xs">*requires app install</li>
                  <br />
                </ol>
                <ol className="flex flex-col items-center mb-5 gap-2">
                  <li className="text-xs text-center w-60">
                    if your not a fan, just reply to the instruction email and
                    ask for a refund
                  </li>
                </ol>
              </div>

              <stripe-buy-button
                buy-button-id="buy_btn_1TSHXyCxzSTl9eCSxuy9H66Q"
                publishable-key="pk_live_51TNaerCxzSTl9eCSeThqmCPCMHtip8Wk0i3gzXkKcOppPMtb02h6gp8tkap7SKMpzRP24Hfoy41pftaodYawVre300JlmTJMH6"
              />
              <div>
                <ol className="align-left mt-3 w-60 text-center">
                  <li>
                    after purchase, you will be sent an email with setup
                    instructions
                  </li>
                </ol>
              </div>
            </div>
          </>
        </section>
        <Analytics />
      </main>
    </>
  );
};

export default page;
