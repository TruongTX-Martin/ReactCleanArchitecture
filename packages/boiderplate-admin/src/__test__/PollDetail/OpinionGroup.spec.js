import { getColorGroup, getStringParticipant, getColorStringParticipant } from '../../containers/PollDetail/OpinionGroup';
describe('Opinion Group', () => {
    it('Test color group', () => {
        expect(getColorGroup(0)).toEqual('#E8384F');
        expect(getColorGroup(1)).toEqual('#FFB900');
        expect(getColorGroup(2)).toEqual('#AA71FF');
        expect(getColorGroup(3)).toEqual('#208EA3');
        expect(getColorGroup(4)).toEqual('#208EA3');
        expect(getColorGroup(5)).toEqual('#208EA3');
    });
    it('Test string participant', () => {
        expect(getStringParticipant('agree')).toEqual('agreed');
        expect(getStringParticipant('disagree')).toEqual('disagreed');
        expect(getStringParticipant('unsure')).toEqual('undecided');
    });
    it('Test color participant', () => {
        expect(getColorStringParticipant('agree')).toEqual('#648FFF');
        expect(getColorStringParticipant('disagree')).toEqual('#d8317c');
        expect(getColorStringParticipant('unsure')).toEqual('#ffb234');
    });
});
