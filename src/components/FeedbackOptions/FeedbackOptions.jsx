import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.slyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option =>(
                <Button type='button' key={option} onClick={onLeaveFeedback}>
                    {option}
                </Button>
            ))}
        </div>
    );
};




FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
   
}