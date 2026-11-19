"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight YouTube player (lite-youtube-embed): shows a poster and only
 * loads the real iframe when the visitor presses play.
 */
export default function LitePlayer({ video, className = "" }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    import("lite-youtube-embed").then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, []);

  const poster = video.poster || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
      {ready ? (
        <lite-youtube
          key={video.id}
          videoid={video.id}
          title={video.title}
          playlabel={`Play video: ${video.title}`}
          params="rel=0&modestbranding=1"
          className="block h-full w-full"
          style={{ backgroundImage: `url("${poster}")`, width: "100%", height: "100%", maxWidth: "none" }}
        />
      ) : (
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url("${poster}")` }} role="img" aria-label={video.title} />
      )}
    </div>
  );
}
