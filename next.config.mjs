import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.(mp3|ogg|wav|flac)$/i,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/sounds',
              outputPath: 'static/sounds',
              name: '[name].[ext]',
              esModule: false,
            },
          }
        });
        // ...다른 웹팩 설정들
        return config;
      }
};

export default withVideos(nextConfig);
