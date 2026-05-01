import Script from "next/script";

export const Vpn = () => {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" async />
      <div className="flex-col flex items-center">
        <span className="text-3xl">no lag vpn</span>
        <span className="text-sm mb-6">2 Devices per Subscription</span>
        <div>
          <ol className="mb-10">
            <li>vpn server is located in rockingham, wa</li>
            <li>completely bypasses all school wifi firewalls</li>
            <li>gives access to all social media and all games</li>
            <li>no disconnects, instant connection</li>
          </ol>
          <ol className="mb-10">
            <li>
              works on all <strong>personal</strong> devices (phone, laptop,
              ipad)
            </li>
            <li className="text-xs">*not school desktops</li>
            <li className="text-xs">*requires app install</li>
          </ol>
        </div>

        <stripe-buy-button
          buy-button-id="buy_btn_1TS9yyCxzSTl9eCSpai2BEIv"
          publishable-key="pk_live_51TNaerCxzSTl9eCSeThqmCPCMHtip8Wk0i3gzXkKcOppPMtb02h6gp8tkap7SKMpzRP24Hfoy41pftaodYawVre300JlmTJMH6"
        />
        <div>
          <ol className="align-left mt-3 w-60 text-center">
            <li>
              after purchase, you will be sent an email with setup instructions
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
