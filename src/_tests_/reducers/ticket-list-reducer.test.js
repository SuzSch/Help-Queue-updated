import ticketListReducer from "../../reducers/ticket-list-reducer";

describe("ticketListReducer", () => {

    let action;
    const ticketData = {
        names: "Suzanne and Jason",
        location: "Epicodus",
        issue: "We are just too awesome at Redux. Need to pump our brakes.",
        id: 1
    }

    const currentState = {
        1: {
            names: 'Elle and Michael',
            location: 'computer 4',
            issue: 'We are very good at everything.',
            id: 1
        }, 2: {
            names: 'Jasmine and Justine',
            location: '2a',
            issue: 'Reducer has side effects',
            id: 2
        }
    }

    test("Should return default state if there is no action type passed into the reducer", () => {
        expect(ticketListReducer({} , {type: null})).toEqual({});
    });

    test("Should succesfully add new ticket data to mainTicketList", () => {
        const { names, location, issue, id} = ticketData;
        action = {
            type: "ADD_TICKET",
            names: names,
            location: location,
            issue: issue,
            id: id
        };

        expect(ticketListReducer({}, action)).toEqual({
            [id] : {
                names: names,
                location: location,
                issue: issue,
                id:id
            }
        })
    })
    
    test('Should successfully delete a ticket', () => {
        action = {
            type: 'DELETE_TICKET',
            id: 2
        };
        expect(ticketListReducer(currentState, action)).toEqual({
            1: {
            names: 'Elle and Michael',
            location: 'computer 4',
            issue: 'We are very good at everything.',
            id: 1
            }
        });
    });
    });
