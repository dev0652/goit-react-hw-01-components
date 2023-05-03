import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 280px;

  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 30px;
  //   padding-top: 30px;

  border-radius: 4px;
  overflow: hidden;
  background-color: white;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  display: block;
  padding: 20px 0;
  text-align: center;
  font-size: 1rem;

  color: gray;
  background-color: #f7f7f7;
`;

export const List = styled.ul`
  display: flex;
  background: beige;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-basis: calc(100% / ${props => props.count});
  color: white;

  --thickness: 0.5px;
  --color: gray;
  text-shadow: calc(var(--thickness) * -1) calc(var(--thickness) * -1) 0
      var(--color),
    var(--thickness) calc(var(--thickness) * -1) 0 var(--color),
    calc(var(--thickness) * -1) var(--thickness) 0 var(--color),
    var(--thickness) var(--thickness) 0 var(--color);

  padding: 15px 0;
`;

export const Label = styled.span`
  font-size: 0.8rem;
`;

export const Percentage = styled.span``;
