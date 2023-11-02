
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {/* умова.якщо title є, тоді рендерим */}
       {title ??  <h2 className={css.title}>{title}</h2>}
  {/* <ul className={css.list}>
    <li className={css.item}>
                <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}</span>
    </li>
  </ul> */}
        
        <ul className={css.list}>
        {stats.map(({id, label, percentage}) => (
          <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
 ) }


