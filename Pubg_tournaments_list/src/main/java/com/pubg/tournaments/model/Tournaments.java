package com.pubg.tournaments.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Tournaments 
{
	@Id
	private String tournamentId;
	
	private String tournamentName;
	
	private String tournamentDate;

	private String tournamentPeriod;

	private String tournamentStatus;

	private String hoursWatched;

	public Tournaments() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tournaments(String tournamentId, String tournamentName, String tournamentDate, String tournamentPeriod,
			String tournamentStatus, String hoursWatched) {
		super();
		this.tournamentId = tournamentId;
		this.tournamentName = tournamentName;
		this.tournamentDate = tournamentDate;
		this.tournamentPeriod = tournamentPeriod;
		this.tournamentStatus = tournamentStatus;
		this.hoursWatched = hoursWatched;
	}

	public String getTournamentId() {
		return tournamentId;
	}

	public void setTournamentId(String tournamentId) {
		this.tournamentId = tournamentId;
	}

	public String getTournamentName() {
		return tournamentName;
	}

	public void setTournamentName(String tournamentName) {
		this.tournamentName = tournamentName;
	}

	public String getTournamentDate() {
		return tournamentDate;
	}

	public void setTournamentDate(String tournamentDate) {
		this.tournamentDate = tournamentDate;
	}

	public String getTournamentPeriod() {
		return tournamentPeriod;
	}

	public void setTournamentPeriod(String tournamentPeriod) {
		this.tournamentPeriod = tournamentPeriod;
	}

	public String getTournamentStatus() {
		return tournamentStatus;
	}

	public void setTournamentStatus(String tournamentStatus) {
		this.tournamentStatus = tournamentStatus;
	}

	public String getHoursWatched() {
		return hoursWatched;
	}

	public void setHoursWatched(String hoursWatched) {
		this.hoursWatched = hoursWatched;
	}

	@Override
	public String toString() {
		return "Tournaments [tournamentId=" + tournamentId + ", tournamentName=" + tournamentName + ", tournamentDate="
				+ tournamentDate + ", tournamentPeriod=" + tournamentPeriod + ", tournamentStatus=" + tournamentStatus
				+ ", hoursWatched=" + hoursWatched + "]";
	}
	
}
