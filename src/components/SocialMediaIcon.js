import React from "react";
const socialMedia = [
  {
    media: "youtube",
    link: "https://www.youtube.com/channel/UCiCLMlV3EqY0SVxhxCxhTSQ",
    classIcon: "fa-brands fa-youtube",
  },
  {
    media: "instagram",
    link: "https://www.instagram.com/jovananggata/",
    classIcon: "fa-brands fa-instagram",
  },
  {
    media: "facebook",
    link: "https://web.facebook.com/jovananggata.jovananggata/",
    classIcon: "fa-brands fa-facebook",
  },
  {
    media: "tiktok",
    link: "https://www.tiktok.com/@mr.coffinss",
    classIcon: "fa-brands fa-tiktok",
  },
];

function SocialMediaIcon() {
  return (
    <>
      {socialMedia.map((arr, index) => {
        return (
          <React.Fragment key={index}>
            <a
              href={arr.link}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border-2 border-slate-400 text-slate-400 hover:bg-primary hover:border-primary hover:text-white"
            >
              <i className={arr.classIcon}></i>
            </a>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default SocialMediaIcon;
