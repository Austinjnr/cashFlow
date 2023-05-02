class MessagesController < ApplicationController
    def index
      @messages = Message.all
    end
  
    def create
      @message = Message.create(message_params)
      ActionCable.server.broadcast 'admin_channel', message: @message.content, author: @message.author, user_id: @message.id unless @message.admin?
      head :ok
    end
  
    private
  
    def message_params
      params.require(:message).permit(:author, :content)
    end
  end
  