const webpack  = require('webpack');
module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.tsx'
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public',
        publicPath: '/public/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css']
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: 'react-hot' },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: 'css-loader' }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

/**
 * Created by baljitsingh on 01/12/2016.
 */
