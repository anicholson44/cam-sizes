# frozen_string_literal: true

module Api
  class CamsController < ApplicationController
    def index
      render json: {
        manufacturers: Manufacturer.all.each_with_object({}) do |m, h|
          h[m.id] = {
            **m.attributes,
            cam_styles: m.cam_styles.map(&:id)
          }
        end,
        cam_styles: CamStyle.all.each_with_object({}) do |s, h|
          h[s.id] = {
            **s.attributes,
            cams: s.cams.map(&:id)
          }
        end,
        cams: Cam.all.each_with_object({}) do |c, h|
          h[c.id] = c.attributes
        end
      }
    end
  end
end
