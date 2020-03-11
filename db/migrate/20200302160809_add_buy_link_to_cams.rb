# frozen_string_literal: true

class AddBuyLinkToCams < ActiveRecord::Migration[6.0]
  def change
    add_column :cams, :buy_link, :string, null: true
  end
end
