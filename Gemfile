source 'https://rubygems.org'
# ruby "2.3.0"

#core ruby
gem 'json', '~> 1.8.3'
gem 'net-ssh'
gem 'net-ping'
gem 'http'

#rails
gem 'rails', '~> 4.2.5.1'
gem 'protected_attributes' # transition to rails 4.2.x
gem 'responders' # transition to rails 4.2.x

# ui - (sass, react, growl, websocket)
gem 'jquery-rails'
gem 'turbolinks'
gem 'jquery-turbolinks'
gem 'react-rails'
gem 'sass-rails'
gem 'remotipart' # ajax file uploads (sshkey)
gem 'socket.io-rails' # websocket streaming
gem 'nprogress-rails' # youtube like spinner
gem 'toastr_rails'
gem 'zeroclipboard-rails'
gem 'uglifier'
gem 'therubyracer', '~> 0.12.2', require: 'v8', platforms: :ruby

# security
gem 'rack-protection'
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-oauth2', require: false
gem 'omniauth-google-oauth2'
gem 'omniauth-github'

# this provides a very efficient lru cache
gem 'lru_redux'

# 3rd party system api's
gem 'megam_api'
gem 'github_api'
gem 'gitlab'
gem 'radosgw-s3'

gem 'paypal-sdk-rest' # billing

# general misc helper
gem 'randexp'
gem 'sshkey' # ssh key-gen
gem 'settingslogic' # singleton settings yaml manager

# passenger server
gem 'passenger', group: :production

group :test, :development do
  gem 'rspec', '~> 3.2.0'
  gem 'listen', '0.7.3', require: false
  gem 'certified', require: false
  # later appears to break Fabricate(:topic, category: category)
  gem 'fabrication', '2.9.8', require: false
  gem 'discourse-qunit-rails', require: 'qunit-rails'
  gem 'mocha', require: false
  gem 'rspec-rails', require: false
  gem 'shoulda', require: false
  gem 'simplecov', require: false
  gem 'timecop'
  gem 'rspec-given'
  gem 'rspec-html-matchers'
  gem 'spork-rails'
  gem 'pry-nav'
  gem 'byebug', require: ENV['RM_INFO'].nil?
end


group :development do
  gem 'better_errors'
  gem 'quiet_assets'
  gem 'binding_of_caller'
  gem 'librarian', '>= 0.0.25', require: false
  gem 'annotate'
end
