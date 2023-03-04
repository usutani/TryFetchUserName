足場のファイルを用意する。
1. rails new TryFetchUserName && cd $_
1. bin/rails g scaffold User name
1. bin/rails db:migrate
1. bin/rails g controller Home index
1. bin/importmap pin lodash

下記のファイルを編集する。
- config/routes.rb
- app/views/home/index.html.erb
- app/javascript/controllers/user_controller.js

参照
- https://stimulus.hotwired.dev
