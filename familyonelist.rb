require 'sinatra'

get '/' do
	'hello world!'
end

get '/hello/:name' do |nm|
	"Hello #{nm}!"
end