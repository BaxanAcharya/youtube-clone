import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJzjjLhb0OQXeF5FGeUpFadxU2QVmnDsv1IhyhJ_6Q=s88-c-k-c0x00ffffff-no-rj"
        channel="zoom "
        verified
        subs="3.74M"
        noOfVideos={5456}
        description="
      Zoom is young India's newest entertainment station. Original Shows. Bollywood News. Gossip. Music. Countdowns. Superstar Interviews. Fan Requests. Youth Shows. Film Reviews. Celebrity Parties, Movies and more. On Air and Online!
      For your daily dose of Entertainment & Bollywood, you can subscribe to our channel on YouTube......."
      />
      <hr />

      <VideoRow
        image="https://i.ytimg.com/an_webp/UCT8hdNsMjk/mqdefault_6s.webp?du=3000&sqp=CJKoivkF&rs=AOn4CLDNciVsO-2yWXBLvWHLOqded0hw9A"
        channel="zoom"
        title="hey there this very gearer momenrt for mer er"
        timestamp="5 minutes ago"
        description="I am very excited"
        sub="25.6k"
        views="2.5M"
      />
      <VideoRow
        image="https://i.ytimg.com/an_webp/UCT8hdNsMjk/mqdefault_6s.webp?du=3000&sqp=CJKoivkF&rs=AOn4CLDNciVsO-2yWXBLvWHLOqded0hw9A"
        channel="zoom"
        title="hey there this very gearer momenrt for mer er"
        timestamp="5 minutes ago"
        description="I am very excited"
        sub="25.6k"
        views="2.5M"
      />
      <VideoRow
        image="https://i.ytimg.com/an_webp/UCT8hdNsMjk/mqdefault_6s.webp?du=3000&sqp=CJKoivkF&rs=AOn4CLDNciVsO-2yWXBLvWHLOqded0hw9A"
        channel="zoom"
        title="hey there this very gearer momenrt for mer er"
        timestamp="5 minutes ago"
        description="I am very excited"
        sub="25.6k"
        views="2.5M"
      />
      <VideoRow
        image="https://i.ytimg.com/an_webp/UCT8hdNsMjk/mqdefault_6s.webp?du=3000&sqp=CJKoivkF&rs=AOn4CLDNciVsO-2yWXBLvWHLOqded0hw9A"
        channel="zoom"
        title="hey there this very gearer momenrt for mer er"
        timestamp="5 minutes ago"
        description="I am very excited"
        sub="25.6k"
        views="2.5M"
      />
      <VideoRow
        image="https://i.ytimg.com/an_webp/UCT8hdNsMjk/mqdefault_6s.webp?du=3000&sqp=CJKoivkF&rs=AOn4CLDNciVsO-2yWXBLvWHLOqded0hw9A"
        channel="zoom"
        title="hey there this very gearer momenrt for mer er"
        timestamp="5 minutes ago"
        description="I am very excited"
        sub="25.6k"
        views="2.5M"
      />
    </div>
  );
}

export default SearchPage;
