rails new TryFetchUserName && cd $_
bin/rails g scaffold User name
bin/rails db:migrate
bin/rails g controller Home index
