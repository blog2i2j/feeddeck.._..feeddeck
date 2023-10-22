import { downloads } from "@/helpers/helpers";
import type { Metadata } from "next";

import { generalMetadata } from "@/helpers/metadata";

export const metadata: Metadata = {
  ...generalMetadata,
  title: "FeedDeck - Download",
};

export default function Download() {
  return (
    <main>
      <div
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
        style={{ minHeight: "calc(100vh - 108px)" }}
      >
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Available on all Platforms
          </h2>
          <p className="mb-5 font-light text-gray-400 sm:text-xl">
            FeedDeck is available on all platforms. Choose your favorite one and
            download the application now! You can also use FeedDeck in your
            browser.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-20">
            <IOS />
            <Android />
            <Web />
            <MacOS />
            <Windows />
            <Linux />
          </div>
        </div>
      </div>
    </main>
  );
}

const IOS = () => (
  <a href={downloads["ios"]} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center justify-center p-8 rounded-lg hover:bg-secondary hover:text-onsecondary">
      <svg
        width="128px"
        height="128px"
        viewBox="0 0 4096 4096"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g id="Apple" transform="matrix(9.14452,0,0,9.14452,290.423,-292.625)">
          <path d="M318.7,268.7C318.5,232 335.1,204.3 368.7,183.9C349.9,157 321.5,142.2 284,139.3C248.5,136.5 209.7,160 195.5,160C180.5,160 146.1,140.3 119.1,140.3C63.3,141.2 4,184.8 4,273.5C4,299.7 8.8,326.767 18.4,354.7C31.2,391.4 77.4,481.4 125.6,479.9C150.8,479.3 168.6,462 201.4,462C233.2,462 249.7,479.9 277.8,479.9C326.4,479.2 368.2,397.4 380.4,360.6C315.2,329.9 318.7,270.6 318.7,268.7ZM262.1,104.5C289.4,72.1 286.9,42.6 286.1,32C262,33.4 234.1,48.4 218.2,66.9C200.7,86.7 190.4,111.2 192.6,138.8C218.7,140.8 242.5,127.4 262.1,104.5Z" />
        </g>
      </svg>
      <span className="pt-4 text-xl">iOS</span>
    </div>
  </a>
);

const Android = () => (
  <a href={downloads["android"]} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center justify-center p-8 rounded-lg hover:bg-secondary hover:text-onsecondary">
      <svg
        width="128px"
        height="128px"
        viewBox="0 0 4096 4096"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g id="Android" transform="matrix(7.11111,0,0,7.11111,0,473.322)">
          <path d="M420.55,301.93C407.384,301.93 396.55,291.096 396.55,277.93C396.55,264.764 407.384,253.93 420.55,253.93C433.716,253.93 444.55,264.764 444.55,277.93C444.55,291.096 433.716,301.93 420.55,301.93M155.45,301.93C142.284,301.93 131.45,291.096 131.45,277.93C131.45,264.764 142.284,253.93 155.45,253.93C168.616,253.93 179.45,264.764 179.45,277.93C179.45,291.096 168.616,301.93 155.45,301.93M429.15,157.45L477.09,74.45C478.196,72.802 478.786,70.862 478.786,68.878C478.786,63.392 474.272,58.878 468.786,58.878C464.987,58.878 461.502,61.043 459.82,64.45L411.28,148.52C332.897,113.365 243.103,113.365 164.72,148.52L116.18,64.45C114.498,61.043 111.013,58.878 107.214,58.878C101.728,58.878 97.214,63.392 97.214,68.878C97.214,70.862 97.804,72.802 98.91,74.45L146.85,157.45C64.53,202.22 8.24,285.55 0,384L576,384C567.76,285.55 511.46,202.22 429.15,157.45" />
        </g>
      </svg>
      <span className="pt-4 text-xl">Android</span>
    </div>
  </a>
);

const Web = () => (
  <a href={downloads["web"]} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center justify-center p-8 rounded-lg hover:bg-secondary hover:text-onsecondary">
      <svg
        width="128px"
        height="128px"
        viewBox="0 0 4096 4096"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g
          id="Browser"
          transform="matrix(8.25806,0,0,8.25806,-66.0645,-66.0645)"
        >
          <path d="M274.69,274.69L237.31,237.31L166,346L274.69,274.69ZM256,8C119,8 8,119 8,256C8,393 119,504 256,504C393,504 504,393 504,256C504,119 393,8 256,8ZM411.85,182.79L426.63,176.66C427.599,176.26 428.637,176.053 429.686,176.053C432.918,176.053 435.846,178.012 437.08,181C437.484,181.972 437.692,183.015 437.692,184.068C437.692,187.298 435.735,190.225 432.75,191.46L418,197.57C413.946,199.248 409.229,197.293 407.55,193.24C405.869,189.194 407.808,184.481 411.85,182.79ZM314.43,94L320.55,79.22C322.241,75.178 326.954,73.239 331,74.92C335.053,76.599 337.008,81.316 335.33,85.37L329.2,100.15C327.521,104.203 322.804,106.158 318.75,104.48C315.766,103.245 313.81,100.318 313.81,97.088C313.81,96.028 314.021,94.978 314.43,94ZM256,60C260.389,60 264,63.611 264,68L264,84C264,88.389 260.389,92 256,92C251.611,92 248,88.389 248,84L248,68C248,63.611 251.611,60 256,60ZM181,74.92C181.972,74.516 183.015,74.308 184.068,74.308C187.298,74.308 190.225,76.265 191.46,79.25L197.57,94C198.012,95.01 198.24,96.101 198.24,97.204C198.24,101.593 194.628,105.204 190.24,105.204C186.954,105.204 183.988,103.18 182.79,100.12L176.66,85.34C175.003,81.291 176.959,76.596 181,74.92ZM117.42,117.41C120.523,114.309 125.627,114.309 128.73,117.41L140,128.72C143.081,131.82 143.081,136.9 140,140C136.897,143.101 131.793,143.101 128.69,140L117.38,128.69C114.307,125.582 114.32,120.502 117.41,117.41L117.42,117.41ZM60,256C60,251.611 63.611,248 68,248L84,248C88.389,248 92,251.611 92,256C92,260.389 88.389,264 84,264L68,264C63.611,264 60,260.389 60,256ZM100.15,329.21L85.37,335.34C84.401,335.74 83.363,335.947 82.314,335.947C79.082,335.947 76.154,333.988 74.92,331C74.516,330.028 74.308,328.985 74.308,327.932C74.308,324.702 76.265,321.775 79.25,320.54L94,314.43C98.054,312.752 102.771,314.707 104.45,318.76C106.131,322.806 104.192,327.519 100.15,329.21ZM104.48,193.21C103.253,196.212 100.317,198.184 97.074,198.184C96.019,198.184 94.974,197.975 94,197.57L79.22,191.45C75.178,189.759 73.239,185.046 74.92,181C76.599,176.947 81.316,174.992 85.37,176.67L100.15,182.8C104.198,184.479 106.151,189.189 104.48,193.24L104.48,193.21ZM197.57,418L191.45,432.78C190.214,435.766 187.286,437.723 184.055,437.723C179.665,437.723 176.052,434.11 176.052,429.72C176.052,428.67 176.259,427.63 176.66,426.66L182.79,411.88C183.988,408.82 186.954,406.796 190.24,406.796C194.628,406.796 198.24,410.407 198.24,414.796C198.24,415.899 198.012,416.99 197.57,418ZM264,444C264,448.389 260.389,452 256,452C251.611,452 248,448.389 248,444L248,428C248,423.611 251.611,420 256,420C260.389,420 264,423.611 264,428L264,444ZM331,437.08C330.028,437.484 328.985,437.692 327.932,437.692C324.702,437.692 321.775,435.735 320.54,432.75L314.43,418C312.752,413.946 314.707,409.229 318.76,407.55C322.814,405.872 327.531,407.827 329.21,411.88L335.34,426.66C336.997,430.709 335.041,435.404 331,437.08ZM394.58,394.59C391.477,397.691 386.373,397.691 383.27,394.59L372,383.28C368.919,380.18 368.919,375.1 372,372C375.103,368.899 380.207,368.899 383.31,372L394.62,383.31C397.693,386.418 397.68,391.498 394.59,394.59L394.58,394.59ZM286.25,286.25L110.34,401.66L225.75,225.75L401.66,110.34L286.25,286.25ZM437.08,331C435.401,335.053 430.684,337.008 426.63,335.33L411.85,329.2C407.797,327.521 405.842,322.804 407.52,318.75C408.755,315.766 411.682,313.81 414.912,313.81C415.972,313.81 417.022,314.021 418,314.43L432.78,320.55C436.822,322.241 438.761,326.954 437.08,331ZM444,264L428,264C423.611,264 420,260.389 420,256C420,251.611 423.611,248 428,248L444,248C448.389,248 452,251.611 452,256C452,260.389 448.389,264 444,264Z" />
        </g>
      </svg>
      <span className="pt-4 text-xl">Web</span>
    </div>
  </a>
);

const MacOS = () => (
  <a href={downloads["macos"]} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center justify-center p-8 rounded-lg hover:bg-secondary hover:text-onsecondary">
      <svg
        width="128px"
        height="128px"
        viewBox="0 0 4096 4096"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g id="Apple" transform="matrix(9.14452,0,0,9.14452,290.423,-292.625)">
          <path d="M318.7,268.7C318.5,232 335.1,204.3 368.7,183.9C349.9,157 321.5,142.2 284,139.3C248.5,136.5 209.7,160 195.5,160C180.5,160 146.1,140.3 119.1,140.3C63.3,141.2 4,184.8 4,273.5C4,299.7 8.8,326.767 18.4,354.7C31.2,391.4 77.4,481.4 125.6,479.9C150.8,479.3 168.6,462 201.4,462C233.2,462 249.7,479.9 277.8,479.9C326.4,479.2 368.2,397.4 380.4,360.6C315.2,329.9 318.7,270.6 318.7,268.7ZM262.1,104.5C289.4,72.1 286.9,42.6 286.1,32C262,33.4 234.1,48.4 218.2,66.9C200.7,86.7 190.4,111.2 192.6,138.8C218.7,140.8 242.5,127.4 262.1,104.5Z" />
        </g>
      </svg>
      <span className="pt-4 text-xl">macOS</span>
    </div>
  </a>
);

const Windows = () => (
  <a href={downloads["windows"]} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center justify-center p-8 rounded-lg hover:bg-secondary hover:text-onsecondary">
      <svg
        width="128px"
        height="128px"
        viewBox="0 0 4096 4096"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g id="Windows" transform="matrix(9.14286,0,0,9.14286,0,-292.571)">
          <path d="M0,93.7L183.6,68.4L183.6,245.8L0,245.8L0,93.7ZM0,418.3L183.6,443.6L183.6,268.4L0,268.4L0,418.3ZM203.8,446.3L448,480L448,268.4L203.8,268.4L203.8,446.3ZM203.8,65.7L203.8,245.8L448,245.8L448,32L203.8,65.7Z" />
        </g>
      </svg>
      <span className="pt-4 text-xl">Windows</span>
    </div>
  </a>
);

const Linux = () => (
  <a href={downloads["linux"]} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col items-center justify-center p-8 rounded-lg hover:bg-secondary hover:text-onsecondary">
      <svg
        width="128px"
        height="128px"
        viewBox="0 0 4096 4096"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g id="Linux" transform="matrix(7.99933,0,0,7.99933,255.362,0.0023132)">
          <path d="M220.8,123.3C221.8,123.8 222.6,125 223.8,125C224.9,125 226.6,124.6 226.7,123.5C226.9,122.1 224.8,121.2 223.5,120.6C221.8,119.9 219.6,119.6 218,120.5C217.6,120.7 217.2,121.2 217.4,121.6C217.7,122.9 219.7,122.7 220.8,123.3ZM198.9,125C200.1,125 200.9,123.8 201.9,123.3C203,122.7 205,122.9 205.4,121.7C205.6,121.3 205.2,120.8 204.8,120.6C203.2,119.7 201,120 199.3,120.7C198,121.3 195.9,122.2 196.1,123.6C196.2,124.6 197.9,125.1 198.9,125ZM420,403.8C416.4,399.8 414.7,392.2 412.8,384.1C411,376 408.9,367.3 402.3,361.7C401,360.6 399.7,359.6 398.3,358.8C397,358 395.6,357.3 394.2,356.8C403.4,329.5 399.8,302.3 390.5,277.7C379.1,247.6 359.2,221.3 344,203.3C326.9,181.8 310.3,161.4 310.6,131.3C311.1,85.4 315.7,0.1 234.8,0C132.4,-0.2 158,103.4 156.9,135.2C155.2,158.6 150.5,177 134.4,199.9C115.5,222.4 88.9,258.7 76.3,296.6C70.3,314.5 67.5,332.7 70.1,349.9C63.6,355.7 58.7,364.6 53.5,370.1C49.3,374.4 43.2,376 36.5,378.4C29.8,380.8 22.5,384.4 18,392.9C15.9,396.8 15.2,401 15.2,405.3C15.2,409.2 15.8,413.2 16.4,417.1C17.6,425.2 18.9,432.8 17.2,437.9C12,452.3 11.3,462.3 15,469.6C18.8,476.9 26.4,480.1 35.1,481.9C52.4,485.5 75.9,484.6 94.4,494.4C114.2,504.8 134.3,508.5 150.3,504.8C161.9,502.2 171.4,495.2 176.2,484.6C188.7,484.5 202.5,479.2 224.5,478C239.4,476.8 258.1,483.3 279.6,482.1C280.2,484.4 281,486.7 282.1,488.8L282.1,488.9C290.4,505.6 305.9,513.2 322.4,511.9C339,510.6 356.5,500.9 370.7,484C384.3,467.6 406.7,460.8 421.6,451.8C429,447.3 435,441.7 435.5,433.5C435.9,425.3 431.1,416.2 420,403.8ZM223.7,87.3C233.5,65.1 257.9,65.5 267.7,86.9C274.2,101.1 271.3,117.8 263.4,127.3C261.8,126.5 257.5,124.7 250.8,122.4C251.9,121.2 253.9,119.7 254.7,117.8C259.5,106 254.5,90.8 245.6,90.5C238.3,90 231.7,101.3 233.8,113.5C229.7,111.5 224.4,110 220.8,109.1C219.8,102.2 220.5,94.5 223.7,87.3ZM183,75.8C193.1,75.8 203.8,90 202.1,109.3C198.6,110.3 195,111.8 191.9,113.9C193.1,105 188.6,93.8 182.3,94.3C173.9,95 172.5,115.5 180.5,122.4C181.5,123.2 182.4,122.2 174.6,127.9C159,113.3 164.1,75.8 183,75.8ZM169.4,136.5C175.6,131.9 183,126.5 183.5,126C188.2,121.6 197,111.8 211.4,111.8C218.5,111.8 227,114.1 237.3,120.7C243.6,124.8 248.6,125.1 259.9,130C268.3,133.5 273.6,139.7 270.4,148.2C267.8,155.3 259.4,162.6 247.7,166.3C236.6,169.9 227.9,182.3 209.5,181.2C205.6,181 202.5,180.2 199.9,179.1C191.9,175.6 187.7,168.7 179.9,164.1C171.3,159.3 166.7,153.7 165.2,148.8C163.8,143.9 165.2,139.8 169.4,136.5ZM172.7,470.5C170,505.6 128.8,504.9 97.4,488.5C67.5,472.7 28.8,482 20.9,466.6C18.5,461.9 18.5,453.9 23.5,440.2L23.5,440C25.9,432.4 24.1,424 22.9,416.1C21.7,408.3 21.1,401.1 23.8,396.1C27.3,389.4 32.3,387 38.6,384.8C48.9,381.1 50.4,381.4 58.2,374.9C63.7,369.2 67.7,362 72.5,356.9C77.6,351.4 82.5,348.8 90.2,350C98.3,351.2 105.3,356.8 112.1,366L131.7,401.6C141.2,421.5 174.8,450 172.7,470.5ZM171.3,444.6C167.2,438 161.7,431 156.9,425C164,425 171.1,422.8 173.6,416.1C175.9,409.9 173.6,401.2 166.2,391.2C152.7,373 127.9,358.7 127.9,358.7C114.4,350.3 106.8,340 103.3,328.8C99.8,317.6 100.3,305.5 103,293.6C108.2,270.7 121.6,248.4 130.2,234.4C132.5,232.7 131,237.6 121.5,255.2C113,271.3 97.1,308.5 118.9,337.6C119.5,316.9 124.4,295.8 132.7,276.1C144.7,248.7 170,201.2 172,163.4C173.1,164.2 176.6,166.6 178.2,167.5C182.8,170.2 186.3,174.2 190.8,177.8C203.2,187.8 219.3,187 233.2,179C239.4,175.5 244.4,171.5 249.1,170C259,166.9 266.9,161.4 271.4,155C279.1,185.4 297.1,229.3 308.6,250.7C314.7,262.1 326.9,286.2 332.2,315.3C335.5,315.2 339.2,315.7 343.1,316.7C356.9,281 331.4,242.5 319.8,231.8C315.1,227.2 314.9,225.2 317.2,225.3C329.8,236.5 346.4,259 352.4,284.3C355.2,295.9 355.7,308 352.8,320C369.2,326.8 388.7,337.9 383.5,354.8C381.3,354.7 380.3,354.8 379.3,354.8C382.5,344.7 375.4,337.2 356.5,328.7C336.9,320.1 320.5,320.1 318.2,341.2C306.1,345.4 299.9,355.9 296.8,368.5C294,379.7 293.2,393.2 292.4,408.4C291.9,416.1 288.8,426.4 285.6,437.4C253.5,460.3 208.9,470.3 171.3,444.6ZM428.7,433.1C427.8,449.9 387.5,453 365.5,479.6C352.3,495.3 336.1,504 321.9,505.1C307.7,506.2 295.4,500.3 288.2,485.8C283.5,474.7 285.8,462.7 289.3,449.5C293,435.3 298.5,420.7 299.2,408.9C300,393.7 300.9,380.4 303.4,370.2C306,359.9 310,353 317.1,349.1C317.4,348.9 317.8,348.8 318.1,348.6C318.9,361.8 325.4,375.2 336.9,378.1C349.5,381.4 367.6,370.6 375.3,361.8C384.3,361.5 391,360.9 397.9,366.9C407.8,375.4 405,397.2 415,408.5C425.6,420.1 429,428 428.7,433.1ZM173.3,148.7C175.3,150.6 178,153.2 181.3,155.8C187.9,161 197.1,166.4 208.6,166.4C220.2,166.4 231.1,160.5 240.4,155.6C245.3,153 251.3,148.6 255.2,145.2C259.1,141.8 261.1,138.9 258.3,138.6C255.5,138.3 255.7,141.2 252.3,143.7C247.9,146.9 242.6,151.1 238.4,153.5C231,157.7 218.9,163.7 208.5,163.7C198.1,163.7 189.8,158.9 183.6,154C180.5,151.5 177.9,149 175.9,147.1C174.4,145.7 174,142.5 171.6,142.2C170.2,142.1 169.8,145.9 173.3,148.7Z" />
        </g>
      </svg>
      <span className="pt-4 text-xl">Linux</span>
    </div>
  </a>
);
