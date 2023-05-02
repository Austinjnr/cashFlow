class ChatChannel < ApplicationCable::Channel
  def subscribed
    if current_user.admin?
      stream_from "admin_channel"
    else
      stream_from "user_#{current_user.id}_channel"
    end
  end

  def receive(data)
    if current_user.admin?
      ActionCable.server.broadcast "user_#{data['user_id']}_channel", message: data['message'], author: current_user.email
    else
      ActionCable.server.broadcast "admin_channel", message: data['message'], author: current_user.email, user_id: current_user.id
    end
  end
end
