module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    output: {
      path: `${__dirname}/public`,
      filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
        ],
    },
};
