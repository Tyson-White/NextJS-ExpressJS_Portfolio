import React from "react"
import ContentLoader from "react-content-loader"

const PostPlaceholder = () => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={700}
    viewBox="0 0 1000 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="300" />
    <rect x="40" y="330" rx="10" ry="10" width="500" height="30" />
    <rect x="40" y="400" rx="10" ry="10" width="100" height="40" />
    <rect x="160" y="400" rx="10" ry="10" width="100" height="40" />
    <rect x="280" y="400" rx="10" ry="10" width="100" height="40" />
    <rect x="40" y="480" rx="10" ry="10" width="300" height="20" />
    <rect x="880" y="480" rx="10" ry="10" width="80" height="20" />

  </ContentLoader>
)

export default PostPlaceholder