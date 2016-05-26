Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, ENV['SPOTIFY_CLIENT_ID'], ENV['SPOTIFY_SECRET_KEY'], scope: 'playlist-read-private user-read-private user-read-email'
end
