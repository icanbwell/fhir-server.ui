import { Typography, Box } from '@mui/material';
import { TBaseResourceProps } from '../types/baseTypes';
import { TQuestionnaireResponseItem } from '../types/partials/QuestionnaireResponseItem';
import PreJson from '../components/PreJson';


type TQuestionnaireResponseItemProps = TBaseResourceProps & {
    questionnaireResponseItem?: TQuestionnaireResponseItem[];
};

const QuestionnaireResponseItem = ({ name, questionnaireResponseItem }: TQuestionnaireResponseItemProps) => {
    return (
        <Box>
            <Typography variant="h4">{name}</Typography>
            {
                questionnaireResponseItem &&
                questionnaireResponseItem.length > 0 &&
                <PreJson data={questionnaireResponseItem} />
            }
        </Box>
    );
};

export default QuestionnaireResponseItem;
