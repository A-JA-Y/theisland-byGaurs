// import Image from "next/image";
// import imh1 from "../assets/Rera-godrej-w-details.webp";

// const QRSection = () => {
//   return (
//     <section className="w-full bg-[#141004] px-[30px] py-[45px] text-[1rem]">
//       <div className="max-w-screen-xl mx-auto">
//         <p className="flex justify-end">
//           <Image
//             src={imh1}
//             alt="RERA Details – Gaur Aero Suites"
//             width={800}
//             height={248}
//             className="block w-full h-auto object-contain max-w-[800px] max-h-[248px]"
//             priority
//             sizes="(max-width: 768px) 100vw, 800px"

//           />
//         </p>
//       </div>
//     </section>
//   );
// };

// export default QRSection;

// qr section updated with text instead of image

import Image from "next/image";
import qrCode from "../assets/rera-qr-code.webp"; 
const QRSection = () => {
  return (
    <section className="w-full bg-[#141004] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto overflow-hidden">

     
        <div className="float-right ml-4">
          <Image
            src={qrCode}
            alt="RERA QR Code – The Islands by Gaurs"
            width={110}
            height={110}
            className="block object-contain"
            priority
          />
        </div>

        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">

          <p className="mb-0.5">
            <strong className="tracking-widest">RERA NO.:-</strong>{" "}
            <span itemProp="identifier">UPRERAPRJ734569</span>
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">
            <a
              href="https://up-rera.in/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white no-underline"
            >
              https://up-rera.in/projects
            </a>
          </p>

          <p className="mb-1">
            <strong className="tracking-widest">COLLECTION ACCOUNT DETAILS:</strong>
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">NAME</strong>: THE ISLANDS BY GAURS RERA 70
          </p>
          <p className="mb-0">ACCOUNT AR LANDCRAFT LLP</p>
          <p className="mb-1">
            <strong className="tracking-widest">COLLECTION ACCOUNT NO.</strong>: 389005000129
          </p>
          <p className="mb-0.5">
            <strong className="tracking-widest">BANK NAME</strong>: ICICI BANK LTD{" "}
            <strong className="tracking-widest">| IFSC CODE: ICIC0003890</strong>
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">BRANCH ADDRESS</strong>: SCO 130, HUDA MARKET,
          </p>
          <p>SECTOR 46, GURGAON-122002</p>

        </address>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default QRSection;
