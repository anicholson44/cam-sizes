# frozen_string_literal: true

class MakeCamStyleLobesNonnullable < ActiveRecord::Migration[6.0]
  def change
    change_column_null :cam_styles, :lobes, false
  end
end
