import React from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
  EmailIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const Share = () => {
    const location = window.location.href;
  return (
    <div className="my-10">
        <h3 className="text-center font-semibold text-2xl mb-3">Share with your firends</h3>
        <div className="flex justify-center items-center gap-4 p-5">
            <FacebookShareButton url={location}>
                <FacebookIcon size={40} className="rounded-full"/>
            </FacebookShareButton>
            <WhatsappShareButton url={location}>
                <WhatsappIcon size={40} className="rounded-full"/>
            </WhatsappShareButton>
            <TwitterShareButton url={location}>
                <TwitterIcon size={40} className="rounded-full"/>
            </TwitterShareButton>
            <LinkedinShareButton url={location}>
                <LinkedinIcon size={40} className="rounded-full"/>
            </LinkedinShareButton>
            <RedditShareButton url={location}>
                <RedditIcon size={40} className="rounded-full"/>
            </RedditShareButton>
            <TelegramShareButton url={location}>
                <TelegramIcon size={40} className="rounded-full"/>
            </TelegramShareButton>
            <EmailShareButton url={location}>
                <EmailIcon size={40} className="rounded-full"/>
            </EmailShareButton>
        </div>
    </div>
  );
};

export default Share;
