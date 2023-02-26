class ActionText::RichText < ActionText::Record
  self.table_name = "action_text_rich_texts"
  delegate :to_s, :nil?, to: :body

  belongs_to :record, polymorphic: true, touch: true
  has_many_attached :embeds
end
