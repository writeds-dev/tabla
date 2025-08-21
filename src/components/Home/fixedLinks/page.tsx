import React from 'react';

const SocialLinks = () => {
  return (
    <div>
      <div className="back-button">
        <a
          href="https://www.tablacuisine.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center tracking-[.1em] uppercase text-[14px] bg-red-950 px-5 py-3 text-white inline-block"
          aria-label="Visit Tablacuisine (opens in a new window)"
        >
          Visit Tablacuisine
        </a>
      </div>

      {/* Social Links are UI only, so keep them here */}
      <div id="fixed-social" aria-label="Follow us on social media">
        {/* Instagram Link */}
        <div>
          <a
            href="https://www.instagram.com/tablacuisine/"
            aria-label="Visit Tablacuisine on Instagram (opens in a new window)"
            className="fixed-instagrem"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="text-md"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
            <span
              style={{
                backgroundColor: "#E1306C", // Instagram's pink color
                color: "white",
                padding: "15px 6px",
                borderRadius: "3px",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "1",
              }}
            >
              Instagram
            </span>
          </a>
        </div>

        {/* Facebook Link */}
        <div>
          <a
            href="https://www.facebook.com/Tablacuisine"
            aria-label="Visit Tablacuisine on Facebook (opens in a new window)"
            className="fixed-facebook"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-md"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
            <span
              style={{
                backgroundColor: "#1877F2", // Facebook's blue color
                color: "white",
                padding: "15px 6px",
                borderRadius: "3px",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "1",
              }}
            >
              Facebook
            </span>
          </a>
        </div>

        {/* Twitter Link (X) */}
        <div>
          <a
            href="https://x.com/tablacuisine"
            aria-label="Visit Tablacuisine on Twitter (X) (opens in a new window)"
            className="fixed-twitter"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "black",
              padding: "4px 8px",
              color: "white",
              textDecoration: "none",
              gap: "6px",
            }}
            role="link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 512 512"
              style={{
                color: "black",
              }}
              aria-hidden="true"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "15px 6px",
                borderRadius: "3px",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "1",
              }}
            >
              Twitter
            </span>
          </a>
        </div>

        {/* YouTube Link */}
        <div>
          <a
            href="https://www.youtube.com/Tablacuisine"
            aria-label="Visit Tablacuisine on YouTube (opens in a new window)"
            className="fixed-youtube"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#FF0000", // YouTube's red color
              padding: "4px 8px",
              color: "white",
              textDecoration: "none",
              gap: "6px",
            }}
            role="link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-youtube"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>
            <span
              style={{
                backgroundColor: "#FF0000", // YouTube's red color
                color: "white",
                padding: "15px 6px",
                borderRadius: "3px",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "1",
              }}
            >
              YouTube
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
