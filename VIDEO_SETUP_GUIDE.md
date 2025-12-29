# Video Setup Guide

## How to Add Your Instagram Reels as Direct Videos

### Option 1: Direct Video Files (Recommended)

1. **Download Your Instagram Reels**
   - Use tools like:
     - [SnapInsta](https://snapinsta.app/)
     - [Instagram Video Downloader](https://igram.world/)
     - [4K Video Downloader](https://www.4kdownload.com/)

2. **Create Folder Structure**
   ```
   portfolio/
   ├── public/
   │   ├── videos/
   │   │   ├── reel-1.mp4
   │   │   ├── reel-2.mp4
   │   │   ├── reel-3.mp4
   │   │   ├── reel-4.mp4
   │   │   └── reel-5.mp4
   │   └── images/
   │       ├── reel-1-poster.jpg
   │       ├── reel-2-poster.jpg
   │       ├── reel-3-poster.jpg
   │       ├── reel-4-poster.jpg
   │       └── reel-5-poster.jpg
   ```

3. **Optimize Videos**
   - **Format**: MP4 (H.264)
   - **Resolution**: 1080x1920 (9:16 aspect ratio)
   - **File Size**: Keep under 10MB for web performance
   - **Duration**: Instagram reels are typically 15-60 seconds

4. **Create Poster Images**
   - Extract first frame of each video as JPG
   - Same resolution as video (1080x1920)
   - Use tools like FFmpeg: `ffmpeg -i reel-1.mp4 -ss 00:00:01 -vframes 1 reel-1-poster.jpg`

### Option 2: Instagram Embed API

```jsx
// Alternative: Use Instagram's oEmbed API
const InstagramEmbed = ({ url }) => {
  const [embedData, setEmbedData] = useState(null);
  
  useEffect(() => {
    fetch(`https://graph.facebook.com/v18.0/instagram_oembed?url=${url}&access_token=YOUR_TOKEN`)
      .then(res => res.json())
      .then(data => setEmbedData(data));
  }, [url]);
  
  return embedData ? (
    <div dangerouslySetInnerHTML={{ __html: embedData.html }} />
  ) : null;
};
```

### Option 3: Third-Party Video Hosting

1. **Upload to Vimeo/YouTube**
   - Upload your reels to Vimeo (private/unlisted)
   - Use their embed players
   - Better for larger files

2. **Use Cloudinary/AWS S3**
   - Professional video hosting
   - Automatic optimization
   - CDN delivery

### Current Implementation Features

✅ **Custom Video Player**
- Play/Pause controls
- Mute/Unmute toggle
- Hover to show controls
- Auto-loop videos
- Mobile-friendly

✅ **Performance Optimized**
- Lazy loading
- Poster images for fast loading
- Compressed video files

✅ **Instagram-Style UI**
- Vertical aspect ratio (9:16)
- Overlay controls
- Smooth animations

### Next Steps

1. Download your 5 Instagram reels
2. Convert to MP4 format
3. Create poster images
4. Place files in `/public/videos/` and `/public/images/`
5. Update file paths in `InstagramShowcase.tsx`

### Performance Tips

- **Compress videos**: Use HandBrake or FFmpeg
- **Use WebM format**: Better compression than MP4
- **Implement lazy loading**: Videos load only when visible
- **Add loading states**: Show skeleton while video loads

### Legal Considerations

- ✅ You own the content (your Instagram reels)
- ✅ No copyright issues
- ✅ Better performance than external embeds
- ✅ Full control over player experience