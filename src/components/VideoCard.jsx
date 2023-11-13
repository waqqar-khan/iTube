import PropTypes from "prop-types";

const VideoCard = ({ videoInfo }) => {
  console.log(videoInfo);
  const { statistics, snippet } = videoInfo;
  const { title, thumbnails, channelTitle } = snippet;

  // Function to format the view count
  const formatViewCount = (viewCount) => {
    // If the view count is in millions, format as M (e.g., 1.5M)
    if (viewCount >= 1e6) {
      return `${(viewCount / 1e6).toFixed(1)}M`;
    }
    // If the view count is in thousands, format as K (e.g., 500K)
    else if (viewCount >= 1e3) {
      return `${(viewCount / 1e3).toFixed(1)}K`;
    }
    // Otherwise, return the view count as is
    return viewCount.toString();
  };

  // Limit title characters and add three dots(ellipsis) if it exceeds the limit
  const limitedTitle =
    title.length > 50 ? `${title.substring(0, 50)}...` : title;

  // Format the view count using the formatViewCount function
  const formattedViewCount = formatViewCount(statistics.viewCount);

  return (
    <div className="p-2 m-2">
      <div className="w-[21.2rem] h-54 flex flex-col transition-transform hover:cursor-pointer hover:scale-105">
        <img
          className="rounded-lg"
          alt="Thumbnail"
          src={thumbnails.medium.url}
        />
        <div className="flex-1 flex flex-col justify-between">
          <ul>
            <li className="font-bold py-2">{limitedTitle}</li>
            <li className="text-gray-500">{channelTitle}</li>
            <li className="text-gray-500">{formattedViewCount} views</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  videoInfo: PropTypes.any.isRequired,
};

export default VideoCard;
