require "test_helper"

class ObjectiveTest < ActiveSupport::TestCase
  test 'can create an objective' do
    assert_nothing_raised do
      Objective.create! title: 'Objective title', weight: 50
    end
  end

  test 'can create an objective without title' do
    assert_nothing_raised do
      Objective.create! weight: 50
    end
  end

  test 'cannot create an objective without weight' do
    assert_raises ActiveRecord::RecordInvalid do
      Objective.create! title: 'Objective title'
    end
  end
end
