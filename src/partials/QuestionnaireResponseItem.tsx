import { Typography, Box, Link } from '@mui/material';
import { TBaseResourceProps } from '../types/baseTypes';
import { TQuestionnaireResponseItem } from '../types/partials/QuestionnaireResponseItem';
import { TQuestionnaireResponseAnswer } from '../types/partials/QuestionnaireResponseAnswer';
import Partials from './';


type TQuestionnaireResponseItemProps = TBaseResourceProps & {
    questionnaireResponseItem?: TQuestionnaireResponseItem[];
};

const renderAnswers = (answers: TQuestionnaireResponseAnswer[]) => {
    return answers.map((answer) => (
        <div >
            {
                answer.valueBoolean &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueBoolean)}</Typography>
            }
            {
                answer.valueDecimal &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueDecimal)}</Typography>
            }
            {
                answer.valueInteger &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueInteger)}</Typography>
            }
            {
                answer.valueDate &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueDate)}</Typography>
            }
            {
                answer.valueDateTime &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueDateTime)}</Typography>
            }
            {
                answer.valueTime &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueTime)}</Typography>
            }
            {
                answer.valueString &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueString)}</Typography>
            }
            {
                answer.valueUri &&
                <Typography display={'flex'}>=&gt;&nbsp;{String(answer.valueUri)}</Typography>
            }
            {
                answer.valueAttachment &&
                <Typography display={'flex'}>=&gt;&nbsp;<Partials.Attachment attachment={answer.valueAttachment}></Partials.Attachment></Typography>
            }
            {
                answer.valueCoding &&
                <Typography display={'flex'}>=&gt;&nbsp;<Partials.Coding coding={answer.valueCoding}></Partials.Coding></Typography>
            }
            {
                answer.valueQuantity &&
                <Typography display={'flex'}>=&gt;&nbsp;<Partials.Quantity quantity={answer.valueQuantity}></Partials.Quantity></Typography>
            }
            {
                answer.valueReference &&
                <Typography display={'flex'}>=&gt;&nbsp;<Partials.Reference reference={answer.valueReference} /></Typography>
            }
            {/* eslint-disable-next-line no-use-before-define */}
            {answer.item && <Typography display={'flex'}>=&gt;&nbsp;{renderItems(answer.item)}</Typography>}
        </div>
    ));
};

const renderItems = (items: TQuestionnaireResponseItem[]) => {
    return items.map((item) => (
        <div style={{ marginLeft: '20px' }}>
            <Typography variant="h6" display={'flex'}>
                {item.linkId}. {item.text ? item.text : '-'}
                {
                    item.definition &&
                    <Typography fontSize={'small'} margin={'auto 0'}>
                        &nbsp;
                        <Link href={item.definition.toString()}>[Link]</Link>
                    </Typography>
                }
            </Typography>
            {item.item && renderItems(item.item)}
            {item.answer && renderAnswers(item.answer)}
        </div>
    ));
};

const QuestionnaireResponseItem = ({ name, questionnaireResponseItem }: TQuestionnaireResponseItemProps) => {
    return (
        <Box>
            <Typography variant="h4">{name}</Typography>
            {questionnaireResponseItem && questionnaireResponseItem.length > 0 && renderItems(questionnaireResponseItem)}
        </Box>
    );
};

export default QuestionnaireResponseItem;
