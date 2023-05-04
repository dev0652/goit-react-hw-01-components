import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 280px;

  border-radius: 4px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.white};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  display: block;
  padding: 20px 0;
  text-align: center;
  font-size: 1rem;

  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.bgLight};
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
  flex-basis: calc(100% / ${props => props.count});
  color: ${p => p.theme.colors.white};

  --thickness: 0.5px;
  --color: ${p => p.theme.colors.gray};
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
