require "shrine/storage/file_system"
require "shrine/storage/memory"

if Rails.env.test?
  Shrine.storages = {
    cache: Shrine::Storage::Memory.new,
    store: Shrine::Storage::Memory.new,
  }
else
  Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new("public", prefix: "uploads/cache"), # temporary
    store: Shrine::Storage::FileSystem.new("public", prefix: "uploads"),       # permanent
  }
end
Shrine.plugin :validation_helpers
Shrine.plugin :validation

class ImageUploader < Shrine
  Attacher.validate do
    validate_mime_type %w[image/jpeg image/png image/webp]
    validate_max_size 1*1024*1024
  end
end
