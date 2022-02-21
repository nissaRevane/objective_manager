class Objective < ApplicationRecord
  validates :weight, presence: true
  validate :weight_sum_is_less_than_100

  private

  def weight_sum_is_less_than_100
    return if objective_total_weight<= 100
    errors.add :total_weight, 'must be less than 100%'
  end

  def objective_total_weight
    Objective.all.pluck(:weight).sum
  end
end
