# frozen_string_literal: true

class AddLobesToCamStyle < ActiveRecord::Migration[6.0]
  def change
    add_column :cam_styles, :lobes, :integer
  end
end
